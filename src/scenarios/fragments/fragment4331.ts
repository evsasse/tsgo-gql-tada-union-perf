import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4329 } from "./fragment4329";
import type { FragmentToken4330 } from "./fragment4330";

export const FRAGMENT_4331 = gql(`
  fragment Fragment4331 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult4331 = ResultOf<typeof FRAGMENT_4331>;
type FragmentSelf4331 = NonNullable<FragmentResult4331>;

export type FragmentToken4331 =
  | FragmentSelf4331["__typename"]
  | FragmentSelf4331["typenameHint"] | FragmentToken4329 | FragmentToken4330;
