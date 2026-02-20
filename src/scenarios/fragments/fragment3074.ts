import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3072 } from "./fragment3072";
import type { FragmentToken3073 } from "./fragment3073";

export const FRAGMENT_3074 = gql(`
  fragment Fragment3074 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult3074 = ResultOf<typeof FRAGMENT_3074>;
type FragmentSelf3074 = NonNullable<FragmentResult3074>;

export type FragmentToken3074 =
  | FragmentSelf3074["__typename"]
  | FragmentSelf3074["typenameHint"] | FragmentToken3072 | FragmentToken3073;
