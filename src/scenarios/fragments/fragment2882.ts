import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2880 } from "./fragment2880";
import type { FragmentToken2881 } from "./fragment2881";

export const FRAGMENT_2882 = gql(`
  fragment Fragment2882 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult2882 = ResultOf<typeof FRAGMENT_2882>;
type FragmentSelf2882 = NonNullable<FragmentResult2882>;

export type FragmentToken2882 =
  | FragmentSelf2882["__typename"]
  | FragmentSelf2882["typenameHint"] | FragmentToken2880 | FragmentToken2881;
