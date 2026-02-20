import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3762 } from "./fragment3762";
import type { FragmentToken3763 } from "./fragment3763";

export const FRAGMENT_3764 = gql(`
  fragment Fragment3764 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult3764 = ResultOf<typeof FRAGMENT_3764>;
type FragmentSelf3764 = NonNullable<FragmentResult3764>;

export type FragmentToken3764 =
  | FragmentSelf3764["__typename"]
  | FragmentSelf3764["typenameHint"] | FragmentToken3762 | FragmentToken3763;
