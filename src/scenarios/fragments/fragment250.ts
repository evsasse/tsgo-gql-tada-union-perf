import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken248 } from "./fragment248";
import type { FragmentToken249 } from "./fragment249";

export const FRAGMENT_250 = gql(`
  fragment Fragment250 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult250 = ResultOf<typeof FRAGMENT_250>;
type FragmentSelf250 = NonNullable<FragmentResult250>;

export type FragmentToken250 =
  | FragmentSelf250["__typename"]
  | FragmentSelf250["typenameHint"] | FragmentToken248 | FragmentToken249;
