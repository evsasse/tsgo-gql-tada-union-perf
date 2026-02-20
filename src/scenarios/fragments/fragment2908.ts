import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2906 } from "./fragment2906";
import type { FragmentToken2907 } from "./fragment2907";

export const FRAGMENT_2908 = gql(`
  fragment Fragment2908 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult2908 = ResultOf<typeof FRAGMENT_2908>;
type FragmentSelf2908 = NonNullable<FragmentResult2908>;

export type FragmentToken2908 =
  | FragmentSelf2908["__typename"]
  | FragmentSelf2908["typenameHint"] | FragmentToken2906 | FragmentToken2907;
