import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2886 } from "./fragment2886";
import type { FragmentToken2887 } from "./fragment2887";

export const FRAGMENT_2888 = gql(`
  fragment Fragment2888 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult2888 = ResultOf<typeof FRAGMENT_2888>;
type FragmentSelf2888 = NonNullable<FragmentResult2888>;

export type FragmentToken2888 =
  | FragmentSelf2888["__typename"]
  | FragmentSelf2888["typenameHint"] | FragmentToken2886 | FragmentToken2887;
