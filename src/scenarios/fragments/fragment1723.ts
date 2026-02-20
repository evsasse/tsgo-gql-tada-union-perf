import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1721 } from "./fragment1721";
import type { FragmentToken1722 } from "./fragment1722";

export const FRAGMENT_1723 = gql(`
  fragment Fragment1723 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult1723 = ResultOf<typeof FRAGMENT_1723>;
type FragmentSelf1723 = NonNullable<FragmentResult1723>;

export type FragmentToken1723 =
  | FragmentSelf1723["__typename"]
  | FragmentSelf1723["typenameHint"] | FragmentToken1721 | FragmentToken1722;
