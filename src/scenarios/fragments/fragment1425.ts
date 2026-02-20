import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1423 } from "./fragment1423";
import type { FragmentToken1424 } from "./fragment1424";

export const FRAGMENT_1425 = gql(`
  fragment Fragment1425 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult1425 = ResultOf<typeof FRAGMENT_1425>;
type FragmentSelf1425 = NonNullable<FragmentResult1425>;

export type FragmentToken1425 =
  | FragmentSelf1425["__typename"]
  | FragmentSelf1425["typenameHint"] | FragmentToken1423 | FragmentToken1424;
