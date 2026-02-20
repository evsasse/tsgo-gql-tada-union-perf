import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1855 } from "./fragment1855";
import type { FragmentToken1856 } from "./fragment1856";

export const FRAGMENT_1857 = gql(`
  fragment Fragment1857 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult1857 = ResultOf<typeof FRAGMENT_1857>;
type FragmentSelf1857 = NonNullable<FragmentResult1857>;

export type FragmentToken1857 =
  | FragmentSelf1857["__typename"]
  | FragmentSelf1857["typenameHint"] | FragmentToken1855 | FragmentToken1856;
