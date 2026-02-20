import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken785 } from "./fragment785";
import type { FragmentToken786 } from "./fragment786";

export const FRAGMENT_787 = gql(`
  fragment Fragment787 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult787 = ResultOf<typeof FRAGMENT_787>;
type FragmentSelf787 = NonNullable<FragmentResult787>;

export type FragmentToken787 =
  | FragmentSelf787["__typename"]
  | FragmentSelf787["typenameHint"] | FragmentToken785 | FragmentToken786;
