import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3103 } from "./fragment3103";
import type { FragmentToken3104 } from "./fragment3104";

export const FRAGMENT_3105 = gql(`
  fragment Fragment3105 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult3105 = ResultOf<typeof FRAGMENT_3105>;
type FragmentSelf3105 = NonNullable<FragmentResult3105>;

export type FragmentToken3105 =
  | FragmentSelf3105["__typename"]
  | FragmentSelf3105["typenameHint"] | FragmentToken3103 | FragmentToken3104;
