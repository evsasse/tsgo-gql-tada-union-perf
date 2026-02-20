import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4352 } from "./fragment4352";
import type { FragmentToken4353 } from "./fragment4353";

export const FRAGMENT_4354 = gql(`
  fragment Fragment4354 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult4354 = ResultOf<typeof FRAGMENT_4354>;
type FragmentSelf4354 = NonNullable<FragmentResult4354>;

export type FragmentToken4354 =
  | FragmentSelf4354["__typename"]
  | FragmentSelf4354["typenameHint"] | FragmentToken4352 | FragmentToken4353;
