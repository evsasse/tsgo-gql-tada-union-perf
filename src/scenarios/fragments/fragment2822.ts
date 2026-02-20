import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2820 } from "./fragment2820";
import type { FragmentToken2821 } from "./fragment2821";

export const FRAGMENT_2822 = gql(`
  fragment Fragment2822 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult2822 = ResultOf<typeof FRAGMENT_2822>;
type FragmentSelf2822 = NonNullable<FragmentResult2822>;

export type FragmentToken2822 =
  | FragmentSelf2822["__typename"]
  | FragmentSelf2822["typenameHint"] | FragmentToken2820 | FragmentToken2821;
