import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2850 } from "./fragment2850";
import type { FragmentToken2851 } from "./fragment2851";

export const FRAGMENT_2852 = gql(`
  fragment Fragment2852 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult2852 = ResultOf<typeof FRAGMENT_2852>;
type FragmentSelf2852 = NonNullable<FragmentResult2852>;

export type FragmentToken2852 =
  | FragmentSelf2852["__typename"]
  | FragmentSelf2852["typenameHint"] | FragmentToken2850 | FragmentToken2851;
