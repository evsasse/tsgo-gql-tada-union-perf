import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2584 } from "./fragment2584";
import type { FragmentToken2585 } from "./fragment2585";

export const FRAGMENT_2586 = gql(`
  fragment Fragment2586 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult2586 = ResultOf<typeof FRAGMENT_2586>;
type FragmentSelf2586 = NonNullable<FragmentResult2586>;

export type FragmentToken2586 =
  | FragmentSelf2586["__typename"]
  | FragmentSelf2586["typenameHint"] | FragmentToken2584 | FragmentToken2585;
