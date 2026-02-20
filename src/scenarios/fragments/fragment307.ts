import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken305 } from "./fragment305";
import type { FragmentToken306 } from "./fragment306";

export const FRAGMENT_307 = gql(`
  fragment Fragment307 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult307 = ResultOf<typeof FRAGMENT_307>;
type FragmentSelf307 = NonNullable<FragmentResult307>;

export type FragmentToken307 =
  | FragmentSelf307["__typename"]
  | FragmentSelf307["typenameHint"] | FragmentToken305 | FragmentToken306;
