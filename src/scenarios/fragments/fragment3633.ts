import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3631 } from "./fragment3631";
import type { FragmentToken3632 } from "./fragment3632";

export const FRAGMENT_3633 = gql(`
  fragment Fragment3633 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult3633 = ResultOf<typeof FRAGMENT_3633>;
type FragmentSelf3633 = NonNullable<FragmentResult3633>;

export type FragmentToken3633 =
  | FragmentSelf3633["__typename"]
  | FragmentSelf3633["typenameHint"] | FragmentToken3631 | FragmentToken3632;
