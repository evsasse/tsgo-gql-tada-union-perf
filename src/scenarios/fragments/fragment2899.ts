import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2897 } from "./fragment2897";
import type { FragmentToken2898 } from "./fragment2898";

export const FRAGMENT_2899 = gql(`
  fragment Fragment2899 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult2899 = ResultOf<typeof FRAGMENT_2899>;
type FragmentSelf2899 = NonNullable<FragmentResult2899>;

export type FragmentToken2899 =
  | FragmentSelf2899["__typename"]
  | FragmentSelf2899["typenameHint"] | FragmentToken2897 | FragmentToken2898;
