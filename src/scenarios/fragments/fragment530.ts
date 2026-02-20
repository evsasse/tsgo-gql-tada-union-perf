import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken528 } from "./fragment528";
import type { FragmentToken529 } from "./fragment529";

export const FRAGMENT_530 = gql(`
  fragment Fragment530 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult530 = ResultOf<typeof FRAGMENT_530>;
type FragmentSelf530 = NonNullable<FragmentResult530>;

export type FragmentToken530 =
  | FragmentSelf530["__typename"]
  | FragmentSelf530["typenameHint"] | FragmentToken528 | FragmentToken529;
