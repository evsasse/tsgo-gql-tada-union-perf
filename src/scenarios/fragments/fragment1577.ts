import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1575 } from "./fragment1575";
import type { FragmentToken1576 } from "./fragment1576";

export const FRAGMENT_1577 = gql(`
  fragment Fragment1577 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult1577 = ResultOf<typeof FRAGMENT_1577>;
type FragmentSelf1577 = NonNullable<FragmentResult1577>;

export type FragmentToken1577 =
  | FragmentSelf1577["__typename"]
  | FragmentSelf1577["typenameHint"] | FragmentToken1575 | FragmentToken1576;
