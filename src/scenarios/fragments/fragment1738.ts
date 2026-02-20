import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1736 } from "./fragment1736";
import type { FragmentToken1737 } from "./fragment1737";

export const FRAGMENT_1738 = gql(`
  fragment Fragment1738 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult1738 = ResultOf<typeof FRAGMENT_1738>;
type FragmentSelf1738 = NonNullable<FragmentResult1738>;

export type FragmentToken1738 =
  | FragmentSelf1738["__typename"]
  | FragmentSelf1738["typenameHint"] | FragmentToken1736 | FragmentToken1737;
