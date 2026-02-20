import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2616 } from "./fragment2616";
import type { FragmentToken2617 } from "./fragment2617";

export const FRAGMENT_2618 = gql(`
  fragment Fragment2618 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult2618 = ResultOf<typeof FRAGMENT_2618>;
type FragmentSelf2618 = NonNullable<FragmentResult2618>;

export type FragmentToken2618 =
  | FragmentSelf2618["__typename"]
  | FragmentSelf2618["typenameHint"] | FragmentToken2616 | FragmentToken2617;
