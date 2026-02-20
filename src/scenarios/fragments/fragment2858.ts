import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2856 } from "./fragment2856";
import type { FragmentToken2857 } from "./fragment2857";

export const FRAGMENT_2858 = gql(`
  fragment Fragment2858 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult2858 = ResultOf<typeof FRAGMENT_2858>;
type FragmentSelf2858 = NonNullable<FragmentResult2858>;

export type FragmentToken2858 =
  | FragmentSelf2858["__typename"]
  | FragmentSelf2858["typenameHint"] | FragmentToken2856 | FragmentToken2857;
