import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4640 } from "./fragment4640";
import type { FragmentToken4641 } from "./fragment4641";

export const FRAGMENT_4642 = gql(`
  fragment Fragment4642 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult4642 = ResultOf<typeof FRAGMENT_4642>;
type FragmentSelf4642 = NonNullable<FragmentResult4642>;

export type FragmentToken4642 =
  | FragmentSelf4642["__typename"]
  | FragmentSelf4642["typenameHint"] | FragmentToken4640 | FragmentToken4641;
