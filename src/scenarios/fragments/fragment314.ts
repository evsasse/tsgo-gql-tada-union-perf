import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken312 } from "./fragment312";
import type { FragmentToken313 } from "./fragment313";

export const FRAGMENT_314 = gql(`
  fragment Fragment314 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult314 = ResultOf<typeof FRAGMENT_314>;
type FragmentSelf314 = NonNullable<FragmentResult314>;

export type FragmentToken314 =
  | FragmentSelf314["__typename"]
  | FragmentSelf314["typenameHint"] | FragmentToken312 | FragmentToken313;
