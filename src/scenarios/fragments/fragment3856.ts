import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3854 } from "./fragment3854";
import type { FragmentToken3855 } from "./fragment3855";

export const FRAGMENT_3856 = gql(`
  fragment Fragment3856 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult3856 = ResultOf<typeof FRAGMENT_3856>;
type FragmentSelf3856 = NonNullable<FragmentResult3856>;

export type FragmentToken3856 =
  | FragmentSelf3856["__typename"]
  | FragmentSelf3856["typenameHint"] | FragmentToken3854 | FragmentToken3855;
