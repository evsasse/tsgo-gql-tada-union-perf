import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2470 } from "./fragment2470";
import type { FragmentToken2471 } from "./fragment2471";

export const FRAGMENT_2472 = gql(`
  fragment Fragment2472 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult2472 = ResultOf<typeof FRAGMENT_2472>;
type FragmentSelf2472 = NonNullable<FragmentResult2472>;

export type FragmentToken2472 =
  | FragmentSelf2472["__typename"]
  | FragmentSelf2472["typenameHint"] | FragmentToken2470 | FragmentToken2471;
