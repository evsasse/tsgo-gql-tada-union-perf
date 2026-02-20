import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1757 } from "./fragment1757";
import type { FragmentToken1758 } from "./fragment1758";

export const FRAGMENT_1759 = gql(`
  fragment Fragment1759 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult1759 = ResultOf<typeof FRAGMENT_1759>;
type FragmentSelf1759 = NonNullable<FragmentResult1759>;

export type FragmentToken1759 =
  | FragmentSelf1759["__typename"]
  | FragmentSelf1759["typenameHint"] | FragmentToken1757 | FragmentToken1758;
