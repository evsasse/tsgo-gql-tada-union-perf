import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2892 } from "./fragment2892";
import type { FragmentToken2893 } from "./fragment2893";

export const FRAGMENT_2894 = gql(`
  fragment Fragment2894 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult2894 = ResultOf<typeof FRAGMENT_2894>;
type FragmentSelf2894 = NonNullable<FragmentResult2894>;

export type FragmentToken2894 =
  | FragmentSelf2894["__typename"]
  | FragmentSelf2894["typenameHint"] | FragmentToken2892 | FragmentToken2893;
