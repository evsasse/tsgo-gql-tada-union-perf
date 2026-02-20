import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2988 } from "./fragment2988";
import type { FragmentToken2989 } from "./fragment2989";

export const FRAGMENT_2990 = gql(`
  fragment Fragment2990 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult2990 = ResultOf<typeof FRAGMENT_2990>;
type FragmentSelf2990 = NonNullable<FragmentResult2990>;

export type FragmentToken2990 =
  | FragmentSelf2990["__typename"]
  | FragmentSelf2990["typenameHint"] | FragmentToken2988 | FragmentToken2989;
