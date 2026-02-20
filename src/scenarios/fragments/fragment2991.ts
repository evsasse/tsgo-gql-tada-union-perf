import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2989 } from "./fragment2989";
import type { FragmentToken2990 } from "./fragment2990";

export const FRAGMENT_2991 = gql(`
  fragment Fragment2991 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult2991 = ResultOf<typeof FRAGMENT_2991>;
type FragmentSelf2991 = NonNullable<FragmentResult2991>;

export type FragmentToken2991 =
  | FragmentSelf2991["__typename"]
  | FragmentSelf2991["typenameHint"] | FragmentToken2989 | FragmentToken2990;
