import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4053 } from "./fragment4053";
import type { FragmentToken4054 } from "./fragment4054";

export const FRAGMENT_4055 = gql(`
  fragment Fragment4055 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult4055 = ResultOf<typeof FRAGMENT_4055>;
type FragmentSelf4055 = NonNullable<FragmentResult4055>;

export type FragmentToken4055 =
  | FragmentSelf4055["__typename"]
  | FragmentSelf4055["typenameHint"] | FragmentToken4053 | FragmentToken4054;
