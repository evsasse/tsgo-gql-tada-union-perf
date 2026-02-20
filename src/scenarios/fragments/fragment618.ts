import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken616 } from "./fragment616";
import type { FragmentToken617 } from "./fragment617";

export const FRAGMENT_618 = gql(`
  fragment Fragment618 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult618 = ResultOf<typeof FRAGMENT_618>;
type FragmentSelf618 = NonNullable<FragmentResult618>;

export type FragmentToken618 =
  | FragmentSelf618["__typename"]
  | FragmentSelf618["typenameHint"] | FragmentToken616 | FragmentToken617;
