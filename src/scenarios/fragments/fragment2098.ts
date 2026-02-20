import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2096 } from "./fragment2096";
import type { FragmentToken2097 } from "./fragment2097";

export const FRAGMENT_2098 = gql(`
  fragment Fragment2098 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult2098 = ResultOf<typeof FRAGMENT_2098>;
type FragmentSelf2098 = NonNullable<FragmentResult2098>;

export type FragmentToken2098 =
  | FragmentSelf2098["__typename"]
  | FragmentSelf2098["typenameHint"] | FragmentToken2096 | FragmentToken2097;
