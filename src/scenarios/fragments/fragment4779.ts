import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4777 } from "./fragment4777";
import type { FragmentToken4778 } from "./fragment4778";

export const FRAGMENT_4779 = gql(`
  fragment Fragment4779 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult4779 = ResultOf<typeof FRAGMENT_4779>;
type FragmentSelf4779 = NonNullable<FragmentResult4779>;

export type FragmentToken4779 =
  | FragmentSelf4779["__typename"]
  | FragmentSelf4779["typenameHint"] | FragmentToken4777 | FragmentToken4778;
