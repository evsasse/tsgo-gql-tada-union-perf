import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2321 } from "./fragment2321";
import type { FragmentToken2322 } from "./fragment2322";

export const FRAGMENT_2323 = gql(`
  fragment Fragment2323 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult2323 = ResultOf<typeof FRAGMENT_2323>;
type FragmentSelf2323 = NonNullable<FragmentResult2323>;

export type FragmentToken2323 =
  | FragmentSelf2323["__typename"]
  | FragmentSelf2323["typenameHint"] | FragmentToken2321 | FragmentToken2322;
