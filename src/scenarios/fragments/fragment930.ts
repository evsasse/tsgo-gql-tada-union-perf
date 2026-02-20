import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken928 } from "./fragment928";
import type { FragmentToken929 } from "./fragment929";

export const FRAGMENT_930 = gql(`
  fragment Fragment930 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult930 = ResultOf<typeof FRAGMENT_930>;
type FragmentSelf930 = NonNullable<FragmentResult930>;

export type FragmentToken930 =
  | FragmentSelf930["__typename"]
  | FragmentSelf930["typenameHint"] | FragmentToken928 | FragmentToken929;
