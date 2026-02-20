import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1631 } from "./fragment1631";
import type { FragmentToken1632 } from "./fragment1632";

export const FRAGMENT_1633 = gql(`
  fragment Fragment1633 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult1633 = ResultOf<typeof FRAGMENT_1633>;
type FragmentSelf1633 = NonNullable<FragmentResult1633>;

export type FragmentToken1633 =
  | FragmentSelf1633["__typename"]
  | FragmentSelf1633["typenameHint"] | FragmentToken1631 | FragmentToken1632;
