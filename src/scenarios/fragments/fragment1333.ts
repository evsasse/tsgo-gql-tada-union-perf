import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1331 } from "./fragment1331";
import type { FragmentToken1332 } from "./fragment1332";

export const FRAGMENT_1333 = gql(`
  fragment Fragment1333 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult1333 = ResultOf<typeof FRAGMENT_1333>;
type FragmentSelf1333 = NonNullable<FragmentResult1333>;

export type FragmentToken1333 =
  | FragmentSelf1333["__typename"]
  | FragmentSelf1333["typenameHint"] | FragmentToken1331 | FragmentToken1332;
