import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2617 } from "./fragment2617";
import type { FragmentToken2618 } from "./fragment2618";

export const FRAGMENT_2619 = gql(`
  fragment Fragment2619 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult2619 = ResultOf<typeof FRAGMENT_2619>;
type FragmentSelf2619 = NonNullable<FragmentResult2619>;

export type FragmentToken2619 =
  | FragmentSelf2619["__typename"]
  | FragmentSelf2619["typenameHint"] | FragmentToken2617 | FragmentToken2618;
