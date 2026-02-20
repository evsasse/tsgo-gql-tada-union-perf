import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2837 } from "./fragment2837";
import type { FragmentToken2838 } from "./fragment2838";

export const FRAGMENT_2839 = gql(`
  fragment Fragment2839 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult2839 = ResultOf<typeof FRAGMENT_2839>;
type FragmentSelf2839 = NonNullable<FragmentResult2839>;

export type FragmentToken2839 =
  | FragmentSelf2839["__typename"]
  | FragmentSelf2839["typenameHint"] | FragmentToken2837 | FragmentToken2838;
