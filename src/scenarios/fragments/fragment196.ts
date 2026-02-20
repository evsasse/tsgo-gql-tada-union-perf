import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken194 } from "./fragment194";
import type { FragmentToken195 } from "./fragment195";

export const FRAGMENT_196 = gql(`
  fragment Fragment196 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult196 = ResultOf<typeof FRAGMENT_196>;
type FragmentSelf196 = NonNullable<FragmentResult196>;

export type FragmentToken196 =
  | FragmentSelf196["__typename"]
  | FragmentSelf196["typenameHint"] | FragmentToken194 | FragmentToken195;
