import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1617 } from "./fragment1617";
import type { FragmentToken1618 } from "./fragment1618";

export const FRAGMENT_1619 = gql(`
  fragment Fragment1619 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult1619 = ResultOf<typeof FRAGMENT_1619>;
type FragmentSelf1619 = NonNullable<FragmentResult1619>;

export type FragmentToken1619 =
  | FragmentSelf1619["__typename"]
  | FragmentSelf1619["typenameHint"] | FragmentToken1617 | FragmentToken1618;
