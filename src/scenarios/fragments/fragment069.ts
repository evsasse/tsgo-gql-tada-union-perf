import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken067 } from "./fragment067";
import type { FragmentToken068 } from "./fragment068";

export const FRAGMENT_069 = gql(`
  fragment Fragment069 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult069 = ResultOf<typeof FRAGMENT_069>;
type FragmentSelf069 = NonNullable<FragmentResult069>;

export type FragmentToken069 =
  | FragmentSelf069["__typename"]
  | FragmentSelf069["typenameHint"] | FragmentToken067 | FragmentToken068;
