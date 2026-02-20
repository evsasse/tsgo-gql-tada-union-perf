import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3856 } from "./fragment3856";
import type { FragmentToken3857 } from "./fragment3857";

export const FRAGMENT_3858 = gql(`
  fragment Fragment3858 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult3858 = ResultOf<typeof FRAGMENT_3858>;
type FragmentSelf3858 = NonNullable<FragmentResult3858>;

export type FragmentToken3858 =
  | FragmentSelf3858["__typename"]
  | FragmentSelf3858["typenameHint"] | FragmentToken3856 | FragmentToken3857;
