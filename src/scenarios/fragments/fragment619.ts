import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken617 } from "./fragment617";
import type { FragmentToken618 } from "./fragment618";

export const FRAGMENT_619 = gql(`
  fragment Fragment619 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult619 = ResultOf<typeof FRAGMENT_619>;
type FragmentSelf619 = NonNullable<FragmentResult619>;

export type FragmentToken619 =
  | FragmentSelf619["__typename"]
  | FragmentSelf619["typenameHint"] | FragmentToken617 | FragmentToken618;
