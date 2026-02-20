import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2764 } from "./fragment2764";
import type { FragmentToken2765 } from "./fragment2765";

export const FRAGMENT_2766 = gql(`
  fragment Fragment2766 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult2766 = ResultOf<typeof FRAGMENT_2766>;
type FragmentSelf2766 = NonNullable<FragmentResult2766>;

export type FragmentToken2766 =
  | FragmentSelf2766["__typename"]
  | FragmentSelf2766["typenameHint"] | FragmentToken2764 | FragmentToken2765;
