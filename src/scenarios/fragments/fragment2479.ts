import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2477 } from "./fragment2477";
import type { FragmentToken2478 } from "./fragment2478";

export const FRAGMENT_2479 = gql(`
  fragment Fragment2479 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult2479 = ResultOf<typeof FRAGMENT_2479>;
type FragmentSelf2479 = NonNullable<FragmentResult2479>;

export type FragmentToken2479 =
  | FragmentSelf2479["__typename"]
  | FragmentSelf2479["typenameHint"] | FragmentToken2477 | FragmentToken2478;
