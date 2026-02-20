import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2857 } from "./fragment2857";
import type { FragmentToken2858 } from "./fragment2858";

export const FRAGMENT_2859 = gql(`
  fragment Fragment2859 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult2859 = ResultOf<typeof FRAGMENT_2859>;
type FragmentSelf2859 = NonNullable<FragmentResult2859>;

export type FragmentToken2859 =
  | FragmentSelf2859["__typename"]
  | FragmentSelf2859["typenameHint"] | FragmentToken2857 | FragmentToken2858;
