import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3046 } from "./fragment3046";
import type { FragmentToken3047 } from "./fragment3047";

export const FRAGMENT_3048 = gql(`
  fragment Fragment3048 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult3048 = ResultOf<typeof FRAGMENT_3048>;
type FragmentSelf3048 = NonNullable<FragmentResult3048>;

export type FragmentToken3048 =
  | FragmentSelf3048["__typename"]
  | FragmentSelf3048["typenameHint"] | FragmentToken3046 | FragmentToken3047;
