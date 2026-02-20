import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2874 } from "./fragment2874";
import type { FragmentToken2875 } from "./fragment2875";

export const FRAGMENT_2876 = gql(`
  fragment Fragment2876 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult2876 = ResultOf<typeof FRAGMENT_2876>;
type FragmentSelf2876 = NonNullable<FragmentResult2876>;

export type FragmentToken2876 =
  | FragmentSelf2876["__typename"]
  | FragmentSelf2876["typenameHint"] | FragmentToken2874 | FragmentToken2875;
