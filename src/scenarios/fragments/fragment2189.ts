import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2187 } from "./fragment2187";
import type { FragmentToken2188 } from "./fragment2188";

export const FRAGMENT_2189 = gql(`
  fragment Fragment2189 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult2189 = ResultOf<typeof FRAGMENT_2189>;
type FragmentSelf2189 = NonNullable<FragmentResult2189>;

export type FragmentToken2189 =
  | FragmentSelf2189["__typename"]
  | FragmentSelf2189["typenameHint"] | FragmentToken2187 | FragmentToken2188;
