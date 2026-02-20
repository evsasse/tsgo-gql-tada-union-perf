import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2618 } from "./fragment2618";
import type { FragmentToken2619 } from "./fragment2619";

export const FRAGMENT_2620 = gql(`
  fragment Fragment2620 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult2620 = ResultOf<typeof FRAGMENT_2620>;
type FragmentSelf2620 = NonNullable<FragmentResult2620>;

export type FragmentToken2620 =
  | FragmentSelf2620["__typename"]
  | FragmentSelf2620["typenameHint"] | FragmentToken2618 | FragmentToken2619;
